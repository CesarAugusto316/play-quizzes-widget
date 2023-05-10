import ReactDOM from 'react-dom/client';
import { PlayQuizzes } from '@quizify/quiz-library';



// data attributes are always lowercase and of string type.
type NodeElDataAttributes = {
  examid: string,
  ongoback: string,
  theme: string,
  lang: string,
  quizgpt: string,
  params: string,
  enablesound: string
}

const widget = document.querySelector('#widget') as HTMLDivElement;

try {
  const dataAttributes = (
    widget
      ?.getAttributeNames()
      .filter(att => att.startsWith('data'))
      .reduce((prev, curr) => ({
        ...prev,
        [curr.slice(5)]: widget.getAttribute(curr)

      }), {}) as NodeElDataAttributes
  );

  const { enablesound, examid, lang, ongoback, params, quizgpt, theme } = dataAttributes;
  const queryParams = new URLSearchParams(params);

  ReactDOM
    .createRoot(widget)
    .render(
      <PlayQuizzes
        examnId={Number(examid)}
        enableSound={JSON.parse(enablesound)}
        lang={lang}
        onGoHome={() => console.log(ongoback)}
        quizGpt={quizgpt}
        theme={JSON.parse(theme)}
        params={{ email: queryParams.get('email'), identifier: queryParams.get('identifier') }}
      />
    );
}
catch (error) {
  alert((error as Error).name);
}

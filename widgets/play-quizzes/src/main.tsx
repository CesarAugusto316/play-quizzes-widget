import ReactDOM from 'react-dom/client';
import { PlayQuiz } from '@quizify/quiz-library';



// data attributes are always lowercase and of string type.
type NodeElDataAttributes = {
  examid: string,
  ongoback: string,
  darkmode: string,
  lang: string,
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

  const { enablesound, examid, lang, ongoback, params, darkmode } = dataAttributes;
  const queryParams = new URLSearchParams(params);

  ReactDOM
    .createRoot(widget)
    .render(
      <PlayQuiz
        examnId={Number(examid)}
        onGoBack={() => window.location.href = ongoback}
        lang={lang}
        darkMode={JSON.parse(darkmode)}
        enableSound={JSON.parse(enablesound)}
        paramsFromHome={{ email: queryParams.get('email'), identifier: queryParams.get('identifier') }}
      />
    );
}
catch (error) {
  alert((error as Error).name);
}

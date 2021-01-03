export interface IQuestion<T> {
  type: string;
  generate: () => T;
  component: (props: { question: T; onSuccess: () => void }) => JSX.Element;
}

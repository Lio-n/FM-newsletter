const BackgroundTemplate = ({ children }: { children: JSX.Element[] | JSX.Element | string }) => (
  <div className="grid place-content-center lg:h-screen lg:bg-slate-800" children={children} />
);

export default BackgroundTemplate;

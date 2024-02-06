export default function DefaultLayout({ children }) {
  return (
    <div className="flex z-0 select-none notranslate">
      <div className="text-center h-screen w-screen">{children}</div>
    </div>
  );
}

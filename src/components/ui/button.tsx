export function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className={`bg-blue-600 text-white px-4 py-2 rounded ${props.className || ""}`}>{children}</button>;
}
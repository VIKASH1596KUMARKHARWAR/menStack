export const InputBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>InputBox Component</h1>
      <input type= "text" placeholder="dsngk"/>
      {children}
    </div>
  );
};

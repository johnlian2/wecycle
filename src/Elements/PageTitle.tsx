export function PageTitle({ title }: { title: string }) {
  return (
    <>
      <h1
        style={{
          fontFamily: '"Inter", sans-serif',
          fontWeight: "300",
          textAlign: "center",
          filter: "drop-shadow(grey 0px 2px 2px)",
        }}
      >
        {title}
      </h1>
      <div
        style={{
          height: "15px",
        }}
      ></div>
    </>
  );
}

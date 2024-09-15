import wecycleLogo from "../assets/wecycle_logo.png";

export function HomePage() {
  return (
    <>
      <div
        style={{
          width: "80%",
          margin: "auto",
        }}
      >
        <div className="d-flex">
          <div className="flex-shrink-0">
            <img
              src={wecycleLogo}
              style={{
                width: "50px",
                height: "50px",
              }}
            />
          </div>
          <div
            className="flex-grow-1 ms-3"
            style={{
              backgroundColor: "#F0C7BC",
              borderRadius: "100px",
            }}
          >
            <p
              style={{
                marginLeft: "20px",
                marginTop: "16px",
              }}
            >
              How can we help you today?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

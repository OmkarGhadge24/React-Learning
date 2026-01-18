import CustomerCard from "./CustomerCard";

const RightContent = () => {
  const cards = [
    {
      number: 1,
      image:
        "https://plus.unsplash.com/premium_photo-1661634496322-9b0fae04baf8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Prime customers, that have access to bank credit and are satisfied with the current product",
      status: "Satisfied",
      statusColor: "#486CFB",
      textColor: "#FFF",
    },
    {
      number: 2,
      image:
        "https://images.unsplash.com/photo-1628891435222-065925dcb365?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Prime customers, that have access to bank credit and are not satisfied with the current service",
      status: "Underserved",
      statusColor: "#4872FE",
      textColor: "#FFF",
    },
    {
      number: 3,
      image:
        "https://images.unsplash.com/photo-1704000475847-7db2bd236186?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Customers from near-prime and sub-prime segments with no access to bank credit",
      status: "Underbanked",
      statusColor: "#CFF16C",
      textColor: "#000",
    }
  ];

  return (
    <div id="card-div" className="h-full flex overflow-x-auto flex-nowrap gap-6 p-5 scrollbar-hide">
      {cards.map((elem) => (
        <CustomerCard
          key={elem.number}
          number={elem.number}
          image={elem.image}
          text={elem.text}
          status={elem.status}
          color={elem.statusColor}
          textColor={elem.textColor}
        />
      ))}
    </div>
  );
};

export default RightContent;

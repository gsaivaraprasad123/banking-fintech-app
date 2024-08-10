import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Vara",
    lastName: "SVP",
    email: "sample@gmail.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header ">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access & manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      {/* <RightSidebar user={loggedIn} transactions={[]} banks={[]} /> */}
      <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance:123.50}, {currentBalance:580.26}]} />
    </section>
  );
};

export default Home;

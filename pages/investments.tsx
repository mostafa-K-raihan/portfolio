import Link from "next/link";
import React from "react";

import styles from "../styles/InvestmentTracker.module.css";

function InvestmentTracker({ entries }: { entries: InvestmentTrackerStats }) {
  return (
    <div>
      <h1>Hi there! Welcome to Investment Tracker</h1>
      <div className={styles.investment}>
        <div className={styles.investment_row}>
          <div className={styles.investment_column}>Business</div>
          <div className={styles.investment_column}>Invested</div>
          <div className={styles.investment_column}>Profit</div>
          <div className={styles.investment_column}>Status</div>
        </div>
        {Object.entries(entries.details).map(([k, value]) => {
          return (
            <div className={styles.investment_row} key={k}>
              <div className={styles.investment_column}>{k}</div>
              <div className={styles.investment_column}>{value.investment}</div>
              <div className={styles.investment_column}>{value.profit}</div>
              <div className={styles.investment_column}>{value.status}</div>
            </div>
          );
        })}
      </div>
      <Link className={styles.link} href="/">
        Back to Home
      </Link>
    </div>
  );
}

export default InvestmentTracker;

type InvestmentTrackerData = {
  data: Array<
    | {
        to: string;
        from: never;
        type: InvestmentType;
        amount: string;
      }
    | {
        to: never;
        from: string;
        type: InvestmentType;
        amount: string;
      }
  >;
};

type InvestmentType = "PROFIT RETURN" | "INVESTMENT";
type InvestmentEntry = {
  profit: number;
  investment: number;
  status?: string;
};

type InvestmentTrackerStats = {
  details: Record<string, InvestmentEntry>;
  total: InvestmentEntry;
};
export const getStaticProps = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/mostafa-K-raihan/investement-tracker/main/transaction-database.json"
  );
  const { data } = (await res.json()) as InvestmentTrackerData;
  const stats = data.reduce((acc, next) => {
    const entity = next.to || next.from;

    const profitAmount = next.type === "INVESTMENT" ? 0 : parseInt(next.amount);
    const investedAmount =
      next.type === "PROFIT RETURN" ? 0 : parseInt(next.amount);

    if (!acc.details) {
      acc.details = {};
    }

    acc.details[entity] = {
      profit: (acc.details[entity]?.profit || 0) + profitAmount,
      investment: (acc.details[entity]?.investment || 0) + investedAmount,
    };

    const diff = Math.abs(
      (acc.details[entity]?.profit || 0) -
        (acc.details[entity]?.investment || 0)
    );
    acc.details[entity].status =
      acc.details[entity]?.profit >= acc.details[entity]?.investment
        ? `✅ ${diff}`
        : `❌ ${diff}`;

    acc.total = {
      profit: (acc?.total?.profit || 0) + profitAmount,
      investment: (acc?.total?.investment || 0) + investedAmount,
    };

    const totalDiff = Math.abs(
      (acc.total?.investment || 0) - (acc.total?.profit || 0)
    );

    acc.total.status =
      acc.total?.profit >= acc.total?.investment
        ? `✅ ${diff}`
        : `❌ ${totalDiff}`;

    return acc;
  }, {} as InvestmentTrackerStats);
  return {
    props: {
      entries: stats,
    },
  };
};

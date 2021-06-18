import React, { useEffect, useState } from "react";
import { GameGrid } from "./components/GameGrid";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { Game, GameValues } from "./entities/game";

export const App: React.FC = () => {
  const [, setSelectedValue] = useState<GameValues>(Game.current);

  useEffect(() => {
    const updateGameValue = () => setSelectedValue(Game.next());
    const interval = window.setInterval(updateGameValue, 2000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <Layout>
      <Header />
      <GameGrid game={Game} />
    </Layout>
  );
};

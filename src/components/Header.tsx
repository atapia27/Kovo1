import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="mb-6">
      <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
    </header>
  );
};

export default Header;

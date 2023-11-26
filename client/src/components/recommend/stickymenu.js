import { useState } from "react";


function StickyMenu() {
  const [customer, setCustomer] = useState(2);

  const handleSetCustomer = (value) => {
    // 최소값과 최댓값 설정
    const newValue = Math.max(2, Math.min(10, value));
    setCustomer(newValue);
  };
  return (
    <div className="section-1">
  
    </div>
  );
}

export default StickyMenu;

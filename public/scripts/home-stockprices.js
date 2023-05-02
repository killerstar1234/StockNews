window.onload = async () => {
    const list = [
      "AAPL",
      "GOOG",
      "INTC",
      "NVDA",
      "SPY",
      "AMD",
      "BBY"
    ];
  
    try {
      for (const name of list) {
        const response = await fetch(`http://localhost:3000/search/getPrice?name=${name}`);
        const data = await response.json();
        const price = data
        document.getElementById(name).innerHTML = `$${price}`;
      }
    } catch (error) {
      console.error(error);
    }
  };
import React from 'react';
import img1 from '../assets/Images/trade1.jpg'
import './AlgoTrading.css';
import p1 from '../assets/Images/p5.jpg'
import p2 from '../assets/Images/p2.jpg'
import p3 from '../assets/Images/p3.jpg'
import p4 from '../assets/Images/p4.jpg'

const AlgoTrading = () => {
  return (
    <>
     <header className="algo-trading-header">
        <h1>"Algorithmic trading: The art and science of making every millisecond count."</h1>
      </header>
        <div className="algo-trading-container">
        <div className="forex-example">
        <img 
          src={img1} 
          alt="Forex Trading Background" 
          className="forex-background" 
        />
        <div className="forex-text">
          <h1 className="wow slideInDown" data-wow-offset="50" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'slideInDown', color: 'white' }}>
          What is Algorithmic Trading?
          </h1>
          <p>
          Algorithmic trading uses automated pre-programmed trading instructions to account for variables such as time, price, and volume. This approach leverages computer speed and computational power to execute trades more efficiently than human traders.
          </p>
          <p>
        In the 21st century, algorithmic trading has grown popular with both retail and institutional traders. Studies have shown that a significant portion of trading, especially in the Forex market, is done by algorithms.
        </p>
        </div>
      </div>
      </div>
     
      <section className="algo-trading-intro">
        <h2></h2>
        <p>
         
        </p>
        
      </section>
      {/* <section className="algo-trading-applications">
        <h2>Applications and Benefits</h2>
        <p>
          Investment banks, pension funds, mutual funds, and hedge funds commonly use algorithmic trading to handle large orders or trades requiring rapid execution. Private traders can also use simpler tools to access these strategies.
        </p>
        <p>
          Algorithmic trading encompasses various strategies, including systematic trading, market making, arbitrage, and high-frequency trading. Each strategy leverages algorithms to make trading decisions faster than humanly possible.
        </p>
      </section>
      <section className="algo-trading-systems">
        <h2>Automated Trading Systems (ATS)</h2>
        <p>
          ATS uses computer programs to generate and submit buy and sell orders based on predefined rules and strategies. These systems are crucial for executing high-frequency trades and are used extensively by investment professionals.
        </p>
        <p>
          Automated trading systems are integrated with electronic trading platforms to handle repetitive tasks swiftly, although they also require new risk controls to prevent issues like the 2010 Flash Crash.
        </p>
      </section>
      <section className="algo-trading-strategies">
        <h2>Trend Following Strategy</h2>
        <p>
          Trend following is a strategy that identifies and trades based on observable market trends. Unlike forecasting, this strategy doesn’t predict market movements but rather trades according to predefined rules once a trend is identified.
        </p>
        <p>
          Despite its reliance on human judgment for setting rules, trend following remains a popular approach among speculators and is designed to handle market volatility and changing trends.
        </p>
      </section> */}
      <section className="algo-trading">
  <div className="algo-trading-card">
    <div className="algo-trading-image">
      <img src={p1} alt="Trading Image"/>
    </div>
    <div className="algo-trading-content">
      <h2>Applications and Benefits</h2>
      <p>
        Investment banks, pension funds, mutual funds, and hedge funds commonly use algorithmic trading to handle large orders or trades requiring rapid execution. Private traders can also use simpler tools to access these strategies.
      </p>
      <p>
        Algorithmic trading encompasses various strategies, including systematic trading, market making, arbitrage, and high-frequency trading. Each strategy leverages algorithms to make trading decisions faster than humanly possible.
        Automated trading systems are often used with electronic trading in automated market centers, including electronic communication networks, "dark pools", and automated exchanges.[5] Automated trading systems and electronic trading platforms can execute repetitive tasks at speeds orders of magnitude greater than any human equivalent. Traditional risk controls and safeguards that relied on human judgment are not appropriate for automated trading and this has caused issues such as the 2010 Flash Crash. New controls such as trading curbs or 'circuit breakers' have been put in place in some electronic markets to deal with automated trading systems.[6]
      </p>
    </div>
  </div>

  <div className="algo-trading-card">
    <div className="algo-trading-image">
      <img src={p3} alt="Trading Image"/>
    </div>
    <div className="algo-trading-content">
      <h2>Automated Trading Systems (ATS)</h2>
      <p>
        ATS uses computer programs to generate and submit buy and sell orders based on predefined rules and strategies. These systems are crucial for executing high-frequency trades and are used extensively by investment professionals.
      </p>
      <p>
        Automated trading systems are integrated with electronic trading platforms to handle repetitive tasks swiftly, although they also require new risk controls to prevent issues like the 2010 Flash Crash.
        The automated trading system determines whether an order should be submitted based on, for example, the current market price of an option and theoretical buy and sell prices.[7] The theoretical buy and sell prices are derived from, among other things, the current market price of the security underlying the option. A look-up table stores a range of theoretical buy and sell prices for a given range of current market price of the underlying security. Accordingly, as the price of the underlying security changes, a new theoretical price may be indexed in the look-up table, thereby avoiding calculations that would otherwise slow automated trading decisions.[8]
      </p>
    </div>
  </div>

  <div className="algo-trading-card">
    <div className="algo-trading-image">
      <img src={p2}alt="Trading Image"/>
    </div>
    <div className="algo-trading-content">
      <h2>Trend Following Strategy</h2>
      <p>
        Trend following is a strategy that identifies and trades based on observable market trends. Unlike forecasting, this strategy doesn’t predict market movements but rather trades according to predefined rules once a trend is identified.
      </p>
      <p>
        Despite its reliance on human judgment for setting rules, trend following remains a popular approach among speculators and is designed to handle market volatility and changing trends.
        Trend following is a trading strategy that bases buying and selling decisions on observable market trends. For years, various forms of trend following have emerged, like the Turtle Trader software program. Unlike financial forecasting, this strategy does not predict market movements. Instead, it identifies a trend early in the day and then trades automatically according to a predefined strategy, regardless of directional shifts. Trend following gained popularity among speculators, though remains reliant on manual human judgment to configure trading rules and entry/exit conditions. Finding the optimal initial strategy is essential
      </p>
    </div>
  </div>
</section>

    
    </>
  )
}

export default AlgoTrading

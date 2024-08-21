import React from 'react';
import './Stocks.css';

const Stocks = () => {
  return (
    <>
      <div className="page-container">
        <h1 className="bonds">Why Invest in Stocks?</h1>
        <p className="para">
          Investing in stocks offers high return potential and ownership benefits, including a share in a company’s profits and influence. It also allows for diversification, spreading risk across various sectors and companies, while potentially growing your wealth over time.
        </p>

        {/* First Card */}
        <section className="home-trading">
          <div className="home-trading-card">
            <div className="home-trading-image">
              <img
                src="https://media.istockphoto.com/id/1325525925/photo/stock-graph-screen-display.webp?b=1&s=170667a&w=0&k=20&c=BYmGcHYHkrMA6G0kbG4SDRzB0k5LUYvKxyZ1fbf42sE="
                alt="Trading Image"
              />
            </div>
            <div className="home-trading-content">
              <h2>Getting Started with Stocks</h2>
              <p>
                Dive into the world of stock investing with our comprehensive guide designed for beginners. Learn how the stock market operates, the various types of stocks such as blue-chip, growth, and dividend stocks, and the fundamental steps to start investing. We’ll walk you through setting up a brokerage account, choosing stocks, and making your first trades. With clear explanations and practical tips, you'll gain the confidence to begin your investment journey and build a diversified portfolio that suits your financial goals.
              </p>
            </div>
          </div>
        </section>

        {/* Second Card */}
        <section className="home-trading">
          <div className="home-trading-card">
            <div className="home-trading-image">
              <img
                src="https://media.istockphoto.com/id/1368207267/photo/woman-using-smartphone-buy-cryptocurrency-at-a-coffee-shop-blockchain-investment-decentralize.webp?b=1&s=170667a&w=0&k=20&c=q7IN14X0y7kQk6TXEJZrFB0bf0epbCId8Fyh78ZEPVo="
                alt="Trading Image"
              />
            </div>
            <div className="home-trading-content">
              <h2>Maximizing Returns with Smart Strategies</h2>
              <p>
                Unlock the secrets to enhancing your investment returns with proven strategies. Explore value investing, which involves selecting undervalued stocks with strong growth potential, and growth investing, which focuses on companies expected to grow at an above-average rate. Discover how dividend investing can provide a steady income stream and momentum investing can help you capitalize on short-term market trends. Our detailed guides will help you tailor these strategies to your personal investment goals and risk tolerance, ensuring you make the most of your stock investments.
              </p>
            </div>
          </div>
        </section>

        {/* Third Card */}
        <section className="home-trading">
          <div className="home-trading-card">
            <div className="home-trading-image">
              <img
                src="https://media.istockphoto.com/id/1411630775/photo/business-analysis-and-financial-background.jpg?s=612x612&w=0&k=20&c=WcszMCjjKXf0oRdQGuDWy4lNqZKw65UgYTHZp9oRloY="
                alt="Trading Image"
              />
            </div>
            <div className="home-trading-content">
              <h2>Managing Risks Like a Pro</h2>
              <p>
                Safeguard your investments with effective risk management techniques. Understand the importance of diversification to spread your investments across different sectors and asset classes, reducing the impact of any single loss. Learn about asset allocation strategies that balance your portfolio between stocks, bonds, and other investments based on your risk tolerance and time horizon. Discover how to use stop-loss orders to protect your investments from significant downturns. Our practical advice will help you navigate market volatility and maintain a resilient portfolio.
              </p>
            </div>
          </div>
        </section>

        {/* Fourth Card */}
        <section className="home-trading">
          <div className="home-trading-card">
            <div className="home-trading-image">
              <img
                src="https://media.istockphoto.com/id/1325525925/photo/stock-graph-screen-display.webp?b=1&s=170667a&w=0&k=20&c=BYmGcHYHkrMA6G0kbG4SDRzB0k5LUYvKxyZ1fbf42sE="
                alt="Trading Image"
              />
            </div>
            <div className="home-trading-content">
              <h2>Spotting Market Trends and Opportunities</h2>
              <p>
                Stay ahead of the market by mastering the art of spotting trends and opportunities. Learn how to analyze market data and economic indicators that signal potential investment opportunities. We’ll guide you through understanding key metrics such as moving averages, trading volumes, and industry trends. By staying informed about current events and market shifts, you can identify promising stocks and make proactive investment decisions. Our insights will help you capitalize on emerging trends and position your portfolio for long-term success.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Stocks;

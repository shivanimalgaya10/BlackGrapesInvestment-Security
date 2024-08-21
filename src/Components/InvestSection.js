import React from 'react'
import './InvestSection.css'
import img11 from '../assets/Images/Portfolioanagement.jpg'
import img12 from '../assets/Images/marketAnalysis.jpg'
import img13 from '../assets/Images/financialPlaning.jpg'
import img14 from '../assets/Images/riskAssess.jpg'
import img15 from '../assets/Images/mutialfound.jpg'
import img16 from '../assets/Images/pexels-tab-trader-180445110-24709183.jpg';

const sections = [
    {
      image:img11,
      title: 'Investment Advisory',
      content: `Black Grapes Investment Advisory is dedicated to providing personalized investment solutions that meet your financial goals. Our experienced team combines market expertise with a deep understanding of your unique needs. We carefully assess your financial situation, risk tolerance, and long-term objectives to develop a tailored investment strategy. Whether you aim to grow your wealth, prepare for retirement, or reach specific financial targets, we offer the insights and support you need to succeed.
      We believe that informed decisions lead to better outcomes. Our advisory services cover various investment options, including stocks, mutual funds, bonds, and alternative investments. We keep you informed about market trends and economic changes, helping you make timely adjustments to your portfolio. Our mission is to simplify the investment process and equip you with the knowledge and tools to navigate the financial landscape confidently.`,
    },
    {
      image: img12,
      title: 'Market Analysis',
      content: `Black Grapes Market Analysis offers comprehensive insights into current market trends and economic conditions to guide your investment decisions. Our expert analysts utilize quantitative data and qualitative assessments to evaluate various sectors and asset classes, helping you identify opportunities and potential risks. We provide in-depth reports on market performance, sector trends, and macroeconomic factors, ensuring you stay informed.
      By continuously monitoring global events and policy changes, we equip you with the knowledge needed to navigate market fluctuations confidently. Our focus on clear communication fosters a collaborative environment, allowing you to discuss findings and address any questions. With our actionable market analysis, you can make informed choices that align with your financial goals and optimize your investment strategy for success. Trust Black Grapes to be your partner in navigating the complexities of the financial markets.`,
    }
    ,
    {
      image: img13,
      title: 'Risk Management',
      content: `Black Grapes Risk Management helps you identify and manage potential risks in your investment portfolio to keep your finances secure. Our experienced team looks closely at market trends and asset performance to understand where risks may arise. We create customized risk management plans that match your financial goals and comfort level with risk, giving you confidence in your investment decisions.
      We continuously monitor the market and adjust your portfolio as needed to address any new risks that may come up. With clear and open communication, we ensure you stay informed about any challenges and opportunities. At Black Grapes, we are dedicated to protecting your investments from unexpected changes, allowing you to focus on achieving your long-term financial success. Let us partner with you to build a strong investment strategy that prioritizes managing risk and securing your financial future.`,
    },
    {
      image: img14,
      title: 'Portfolio Management',
      content: `Black Grapes Portfolio Management offers personalized strategies to help you reach your financial goals. Our experts analyze your financial situation, risk tolerance, and market trends to create a customized investment plan. We continuously monitor your portfolio and make necessary adjustments to keep it aligned with your objectives. Using thorough market research and advanced tools, we identify opportunities and manage risks effectively. We keep you informed and involved in the decision-making process, ensuring transparency and building trust. With Black Grapes, you can be confident that your investments are managed with care and expertise, guiding you towards long-term financial success.`,
    },
    {
      image: img15,
      title: 'Financial Planning',
      content: `Black Grapes Financial Planning provides tailored strategies to help you achieve your financial goals. Our team of experts carefully assesses your current financial situation, future aspirations, and risk tolerance to create a personalized financial plan. We consider all aspects of your financial life, including savings, investments, retirement planning, and insurance needs.
      We continuously monitor your progress and make necessary adjustments to keep your plan on track. By staying informed about market trends and economic changes, we help you make proactive decisions. Our commitment to transparency ensures you understand each step of the planning process. With Black Grapes, you can trust that your financial future is in capable hands, giving you the confidence to pursue your dreams with a solid financial foundation.`,
    },
    {
      image: img16,
      title: 'Mutual Fund Advisory',
      content: `Black Grapes Mutual Fund Advisory provides expert guidance to help you navigate the world of mutual fund investments. Our experienced advisors analyze your financial goals, risk tolerance, and investment horizon to recommend the best mutual fund options for you. We offer a diverse range of funds, including equity, debt, and hybrid, to suit your unique needs.
      We continuously monitor the performance of your mutual fund portfolio, making adjustments as needed to maximize returns and manage risks. Our transparent approach ensures you are always informed about your investments' progress and any market changes. With Black Grapes, you receive personalized advice and support, empowering you to make informed decisions and achieve your financial goals through smart mutual fund investments.`,
    },
  ];

const InvestSection = () => {
  return (
    <>
        <section className="investment-sections">
      {sections.map((section, index) => (
        <div className="investment-card" key={index}>
          <div className="investment-image">
            <img src={section.image} alt={section.title} />
          </div>
          <div className="investment-content">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </div>
        </div>
      ))}
    </section>
      
    </>
  )
}

export default InvestSection

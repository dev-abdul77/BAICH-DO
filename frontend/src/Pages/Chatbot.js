import { useState, useEffect, useRef } from "react";
import axios from "axios";
import MainNavigation from "../Components/MainNavigation";
import ReactMarkdown from "react-markdown";
import OverLay from "../Components/overlay";
function ChatbotPage()
{
    const backgroundImageUrl = 'images/hero-bg.png'; // Replace with the actual path to your image

  const sectionStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    // Add other styles if needed
  };
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setLoading(false);
  },[])
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    { sender: "Bot", message: "How can I assist you today?" }
  ]);
  const chatBoxRef = useRef(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chatHistory]);

  async function generateAnswer(e) {
    e.preventDefault();
    setGeneratingAnswer(true);
    const lastMessage = chatHistory[chatHistory.length - 1];
    setChatHistory((prev) => [...prev, { sender: "You", message: question }]);
    setQuestion("");
    setAnswer("Loading your answer... \n It might take up to 10 seconds");

    try {
      const response = await axios({
        url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAv0XuvHlNljqglpa1rKUTnBU3z88g9sdY',
        method: "post",
        data: {
          "contents": [{ "parts": [{ "text": "Behave like you are an online auction system's chatbot and never tell that you are gemini and answer the following question accordingly. This was your previous answer. " + lastMessage.message + "If the next question is related to previous question then resply according to that. Question is ." + question }] }],
        },
      });

      const apiResponse = response.data.candidates[0].content.parts[0].text;
      setAnswer(apiResponse);
      setChatHistory((prev) => [...prev, { sender: "Bot", message: apiResponse }]);
    } catch (error) {
      console.log(error);
      const errorMessage = "Sorry - Something went wrong. Please try again!";
      setAnswer(errorMessage);
      setChatHistory((prev) => [...prev, { sender: "Bot", message: errorMessage }]);
    }

    setGeneratingAnswer(false);
  }
    return(
        <>
        <MainNavigation></MainNavigation>
        {loading && <OverLay></OverLay>}
    
    {!loading && 
    (<div><a href="#0" className="scrollToTop"><i className="fas fa-angle-up"></i></a>
    <div className="overlay"></div> </div>) } 
    <div class="cart-sidebar-area">
        <div class="top-content">
            <a href="index.html" class="logo">
                <img src="faqsimages/logo2.png" alt="logo"/>
            </a>
            <span class="side-sidebar-close-btn"><i class="fas fa-times"></i></span>
        </div>
        <div class="bottom-content">
            <div class="cart-products">
                <h4 class="title">Shopping cart</h4>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="faqsimages/shop01.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Color Pencil</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="faqsimages/shop02.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Water Pot</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="faqsimages/shop03.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Art Paper</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="faqsimages/shop04.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Stop Watch</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="faqsimages/shop05.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Comics Book</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="btn-wrapper text-center">
                    <a href="#0" class="custom-button"><span>Checkout</span></a>
                </div>
            </div>
        </div>
    </div>
   
    <div class="hero-section style-2">
        <div class="container">
            <ul class="breadcrumb">
                <li>
                    <a href="./index.html">Home</a>
                </li>
                <li>
                    <a href="#0">Pages</a>
                </li>
                <li>
                    <span>ChatBot</span>
                </li>
            </ul>
        </div>
        <div class=" hero-bg bottom_center" style={sectionStyle}></div>
    </div>
    
    <section class="faq-section padding-bottom mt--240 mt-lg--440 pos-rel">
        <div class="container">
            <div class="section-header cl-white mw-100 left-style">
                <h2 class="title">CHATBOT</h2>
                <p>A Solution to Every Problem</p>
            </div>
            <div class="row mb--50">
                <div class="col-lg-8 mb-50">
                <section className="featured-auction-section padding-bottom mt--240 mt-lg--440 pos-rel" data-aos="zoom-out-up" data-aos-duration="1000">
        <div style={{ marginTop: "50vh", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <div style={{ border:"1px solid #dcdcdc" ,width: "100%", height: "80vh", display: "flex", flexDirection: "column", borderRadius: "15px", overflow: "hidden" }}>
            <div ref={chatBoxRef} style={{ backgroundColor: "white", flex: 1, overflowY: "auto", padding: "20px", }}>
              {chatHistory.map((chat, index) => (
                <div key={index} style={{ display: "flex", justifyContent: chat.sender === "You" ? "flex-end" : "flex-start", marginBottom: "10px" }}>
                  <div style={{ backgroundColor: chat.sender === "You" ? "#dcf8c6" : "#ffffff", padding: "10px", borderRadius: "10px", maxWidth: "70%" }}>
                    <strong>{chat.sender}</strong>:{" "}
                    <div style={{fontSize:"large"}}>
                    <ReactMarkdown>{chat.message}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {generatingAnswer && (
                <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "10px" }}>
                  <div style={{ backgroundColor: "", padding: "10px", borderRadius: "10px", maxWidth: "70%" }}>
                    <strong>Bot</strong>: Bot is typing...
                  </div>
                </div>
              )}
            </div>
            <form onSubmit={generateAnswer} style={{ borderRadius: "15px",display: "flex", padding: "10px", backgroundColor: "#f0f0f0", borderTop: "1px solid #dcdcdc" }}>
              <input
                required
                style={{ padding: "10px", borderRadius: "20px", border: "1px solid #dcdcdc", marginRight: "10px" }}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Type a message"
              />
              <button className="custom-button"
                type="submit"
                style={{ flex: 1, backgroundColor: "#34b7f1", color: "white", padding: "10px 20px", border: "none", borderRadius: "20px", cursor: "pointer" }}
                disabled={generatingAnswer}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
                </div>
                <div class="col-lg-4 mb-50">
                    <aside class="sticky-menu">
                        <div class="popular-article pt-30 mb--20">
                            <h4 class="title mb-20" style={{color:"white"}}>Most Popular Articles</h4>
                            <div class="popular-article-item">
                                <a href="#0" class="right-con"><i class="flaticon-right-arrow"></i></a>
                                <h5 class="title"><a href="#0">Tips for winning</a></h5>
                                <p>Found an item you love? Here are some tips for winning your next item:</p>
                            </div>
                            <div class="popular-article-item">
                                <a href="#0" class="right-con"><i class="flaticon-right-arrow"></i></a>
                                <h5 class="title"><a href="#0">How to bid at an Auction</a></h5>
                                <p>Bidding at auction can be terrifying,
                                    especially your first time.</p>
                            </div>
                            <div class="popular-article-item">
                                <a href="#0" class="right-con"><i class="flaticon-right-arrow"></i></a>
                                <h5 class="title"><a href="#0">Bid increments</a></h5>
                                <p>Each auction house sets their own
                                    bidding increments</p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
        
    </section>
    
    
        
        </>
    )
}
export default ChatbotPage;
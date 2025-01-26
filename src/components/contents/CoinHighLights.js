import React, { useContext } from 'react'
import { CoinHighlightContext } from '../contexts/CoinHighLightContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const CoinHighLights = () => {
    const {coins, loading, cerror, fetchCoins} = useContext(CoinHighlightContext);

    const sliderSettings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 9, // Default for large screens
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1024, // Tablet size
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 464, // Mobile size
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

  return (
<div className='highlight-coins'>
    {loading && <div>Loading...</div>}
    {cerror && <div className="error">Error in Highlighted Coins...</div>}
    {!loading && !cerror && coins.length > 0 ? (
        <Slider {...sliderSettings}>
            {coins.map((coin) => (
                <div className="slider-items" key={coin.id}>
                    <div className="hc-con-a-b">
                        <div className="c-h-icon-content">
                            <i
                                className={`c-h-icon bx ${
                                    coin.price_change_percentage_24h > 0
                                        ? 'bxs-up-arrow'
                                        : 'bxs-down-arrow'
                                }`}
                                style={{
                                    color: `${coin.price_change_percentage_24h > 0 ? 'green' : 'red'}`,
                                }}
                            ></i>
                        </div>
                        <h4 className="c-h-heading">{coin.symbol.toUpperCase()}</h4>
                        <p className="c-h-text">${coin.current_price.toFixed(2)}</p>
                    </div>
                </div>
            ))}
        </Slider>
    ) : (
        <div>No Coins Available</div>
    )}
</div>

  )
}

export default CoinHighLights

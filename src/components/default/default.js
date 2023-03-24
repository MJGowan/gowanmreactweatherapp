import React, { useState, useEffect } from 'react';
import './default.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Fetch, FiveDays } from '../../scripts/fetch';
import wSun from '../../Assets/whiteSymbols/Sun (1).png';
import wCloud from '../../Assets/whiteSymbols/Cloud.png';
import wFog from '../../Assets/whiteSymbols/CloudFog.png';
import wRain from '../../Assets/whiteSymbols/CloudRain.png';
import wSnow from '../../Assets/whiteSymbols/CloudSnow.png';
import bSun from '../../Assets/blackSymbols/Sun.png';
import starEmpty from '../../Assets/stars/Star.png';
import CreateElements from '../../scripts/favorites';
import { useLocation } from '../../scripts/location';
import StarBtn from '../../scripts/starBtn';

export default function Default() {

    const searchCity = async event => {
        event.preventDefault();
        const responseFetch = await Fetch(input);
        setLocation(responseFetch.location);
        setCurrentTemp(responseFetch.temp);
        setHigh(responseFetch.max);
        setLow(responseFetch.min);

        const responseFiveDays = await FiveDays(responseFetch.longitude, responseFetch.latitude);
        console.log(responseFiveDays);
        setDateOne(responseFiveDays.dayOneDate);
        setTempOne(responseFiveDays.dayOneTemp);
        setWeatherOne(responseFiveDays.dayOneWeather);

        setDateTwo(responseFiveDays.dayTwoDate);
        setTempTwo(responseFiveDays.dayTwoTemp);
        setWeatherTwo(responseFiveDays.dayTwoWeather);

        setDateThree(responseFiveDays.dayThreeDate);
        setTempThree(responseFiveDays.dayThreeTemp);
        setWeatherThree(responseFiveDays.dayThreeWeather);

        setDateFour(responseFiveDays.dayFourDate);
        setTempFour(responseFiveDays.dayFourTemp);
        setWeatherFour(responseFiveDays.dayFourWeather);

        setDateFive(responseFiveDays.dayFiveDate);
        setTempFive(responseFiveDays.dayFiveTemp);
        setWeatherFive(responseFiveDays.dayFiveWeather);
    }

    const [input, setInput] = useState('');

    //-----Daily Box----------------
    const [location, setLocation] = useLocation();
    const [currentTemp, setCurrentTemp] = useState('');
    const [high, setHigh] = useState('');
    const [low, setLow] = useState('');

    //-----Favorites----------------
    const [favorites, setFavorites] = useState('');

    //-----Five Days----------------
    const [dateOne, setDateOne] = useState('');
    const [tempOne, setTempOne] = useState('');
    const [weatherOne, setWeatherOne] = useState('');

    const [dateTwo, setDateTwo] = useState('');
    const [tempTwo, setTempTwo] = useState('');
    const [weatherTwo, setWeatherTwo] = useState('');

    const [dateThree, setDateThree] = useState('');
    const [tempThree, setTempThree] = useState('');
    const [weatherThree, setWeatherThree] = useState('');

    const [dateFour, setDateFour] = useState('');
    const [tempFour, setTempFour] = useState('');
    const [weatherFour, setWeatherFour] = useState('');

    const [dateFive, setDateFive] = useState('');
    const [tempFive, setTempFive] = useState('');
    const [weatherFive, setWeatherFive] = useState('');
    //------------------------------

    let weatherOneImg;
    if (weatherOne === "Clear") {
        weatherOneImg = wSun;
    } else if (weatherOne === "Clouds") {
        weatherOneImg = wCloud;
    } else if (weatherOne === "Rain" || weatherOne === "Drizzle" || weatherOne === "Thunderstorm") {
        weatherOneImg = wRain;
    } else if (weatherOne === "Snow") {
        weatherOneImg = wSnow;
    } else {
        weatherOneImg = wFog;
    }

    let weatherTwoImg;
    if (weatherTwo === "Clear") {
        weatherTwoImg = wSun;
    } else if (weatherTwo === "Clouds") {
        weatherTwoImg = wCloud;
    } else if (weatherTwo === "Rain" || weatherTwo === "Drizzle" || weatherTwo === "Thunderstorm") {
        weatherTwoImg = wRain;
    } else if (weatherTwo === "Snow") {
        weatherTwoImg = wSnow;
    } else {
        weatherTwoImg = wFog;
    }

    let weatherThreeImg;
    if (weatherThree === "Clear") {
        weatherThreeImg = wSun;
    } else if (weatherThree === "Clouds") {
        weatherThreeImg = wCloud;
    } else if (weatherThree === "Rain" || weatherThree === "Drizzle" || weatherThree === "Thunderstorm") {
        weatherThreeImg = wRain;
    } else if (weatherThree === "Snow") {
        weatherThreeImg = wSnow;
    } else {
        weatherThreeImg = wFog;
    }

    let weatherFourImg;
    if (weatherFour === "Clear") {
        weatherFourImg = wSun;
    } else if (weatherFour === "Clouds") {
        weatherFourImg = wCloud;
    } else if (weatherFour === "Rain" || weatherFour === "Drizzle" || weatherFour === "Thunderstorm") {
        weatherFourImg = wRain;
    } else if (weatherFour === "Snow") {
        weatherFourImg = wSnow;
    } else {
        weatherFourImg = wFog;
    }

    let weatherFiveImg;
    if (weatherFive === "Clear") {
        weatherFiveImg = wSun;
    } else if (weatherFive === "Clouds") {
        weatherFiveImg = wCloud;
    } else if (weatherFive === "Rain" || weatherFive === "Drizzle" || weatherFive === "Thunderstorm") {
        weatherFiveImg = wRain;
    } else if (weatherFive === "Snow") {
        weatherFiveImg = wSnow;
    } else {
        weatherFiveImg = wFog;
    }

    //------------------------------------

    return (
        <div>
            <Container>
                <br />
                <Form>
                    <Row>
                        <Col className='col-11'>
                            <Form.Group className="mb-3" controlId="formBasicSearch">
                                <Form.Control type="text" placeholder="Search" className='input' onChange={e => setInput(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col className='col-1'>
                            <Button className='button' variant="primary" type="submit" onClick={searchCity}>
                                Search
                            </Button>
                        </Col>
                    </Row>
                </Form>
                <br />
                {/* Ternary Operator (?) */}
                {
                    window.matchMedia("(min-width: 427px)").matches ?
                        (
                            <>
                                <br />
                                <Row>
                                    <Col className='col-7'>
                                        <div className='dailyBg'></div>
                                        <div className='daily'>
                                            <Row >
                                                <Col className='col-10 location'>
                                                    <p id='location'>{location}</p>
                                                </Col>
                                                <Col className='col-1 localStar'>
                                                    <StarBtn/>
                                                </Col>
                                            </Row>
                                            <hr className='hr' />
                                            <Row>
                                                <Col className='d-flex justify-content-center'>
                                                    <img src={bSun}></img>
                                                </Col>
                                                <Col className='d-flex justify-content-center currentTemp'>{currentTemp} °F</Col>
                                                <Col className=''>
                                                    <p>High: {high}°</p>
                                                    <p>Low: {low}°</p>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                    <Col className='col-5 d-flex justify-content-center text-center'>
                                        <div className='col-12 favorites'>
                                            <Row className='favTitle' style={{ fontWeight: 'bold' }}>
                                                <p>Favorite Cities</p>
                                            </Row>
                                            <hr className='hr' />
                                            <CreateElements />
                                        </div>
                                    </Col>
                                </Row>
                                <br />
                                <br />
                                <Row className='text-center'>
                                    <Col className='d-flex justify-content-center'>
                                        <div className='col-12 fiveDays'>
                                            <p className='date'>{dateOne}</p>
                                            <hr className='hr' />
                                            <Row>
                                                <Col>
                                                    <img src={weatherOneImg} className='img'></img>
                                                </Col>
                                                <Col>
                                                    <p>{tempOne}°</p>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                    <Col className='d-flex justify-content-center'>
                                        <div className='col-12 fiveDays'>
                                            <p className='date'>{dateTwo}</p>
                                            <hr className='hr' />
                                            <Row>
                                                <Col>
                                                    <img src={weatherTwoImg} className='img'></img>
                                                </Col>
                                                <Col>
                                                    <p>{tempTwo}°</p>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                    <Col className='d-flex justify-content-center'>
                                        <div className='col-12 fiveDays'>
                                            <p className='date'>{dateThree}</p>
                                            <hr className='hr' />
                                            <Row>
                                                <Col>
                                                    <img src={weatherThreeImg} className='img'></img>
                                                </Col>
                                                <Col>
                                                    <p>{tempThree}°</p>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                    <Col className='d-flex justify-content-center'>
                                        <div className='col-12 fiveDays'>
                                            <p className='date'>{dateFour}</p>
                                            <hr className='hr' />
                                            <Row>
                                                <Col>
                                                    <img src={weatherFourImg} className='img'></img>
                                                </Col>
                                                <Col>
                                                    <p>{tempFour}°</p>
                                                </Col>
                                            </Row>

                                        </div>
                                    </Col>
                                    <Col className='d-flex justify-content-center'>
                                        <div className='col-12 fiveDays'>
                                            <p className='date'>{dateFive}</p>
                                            <hr className='hr' />
                                            <Row>
                                                <Col>
                                                    <img src={weatherFiveImg} className='img'></img>
                                                </Col>
                                                <Col>
                                                    <p>{tempFive}°</p>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            </>)
                        :
                        (
                            <>
                                <Row>
                                    <Col className='col-6'>
                                        <div className='dailyBg'></div>
                                        <div className='daily'>
                                            <Row >
                                                <Col className='col-10 location'>
                                                    <p>{location}</p>
                                                </Col>
                                                <Col className='col-1 localStar'>
                                                    <img src={starEmpty} style={{ width: '20px' }} />
                                                </Col>
                                            </Row>
                                            <hr className='hr' />
                                            <Row>
                                                <Col className='d-flex justify-content-center'>
                                                    <img style={{ marginTop: '15px' }} className='mainImg' src={bSun}></img>
                                                </Col>
                                                <Col className='d-flex justify-content-center currentTemp'>{currentTemp} °F</Col>
                                            </Row>
                                            <Row style={{ marginRight: '10px', marginTop: '-30px' }}>
                                                <Col className='d-flex justify-content-end'>
                                                    <p>High: {high}°</p>
                                                </Col>
                                            </Row>
                                            <Row style={{ marginRight: '10px' }}>
                                                <Col className='d-flex justify-content-end'>
                                                    <p>Low: {low}°</p>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col>
                                        <div className='col-6 favorites text-center'>
                                            <Row style={{ fontWeight: 'bold' }}>
                                                <p style={{ marginTop: '10px' }}>Favorite Cities</p>
                                            </Row>
                                            <hr className='hr' />
                                            <CreateElements />
                                        </div>
                                    </Col>
                                </Row>
                                <br />
                                <div className='days'>

                                    <Row className='text-center'>
                                        <Col className='d-flex justify-content-end'>
                                            <div className='fiveDays'>
                                                <p className='date'>{dateOne}</p>
                                                <hr className='hr' />
                                                <Row>
                                                    <Col>
                                                        <img src={weatherOneImg} className='img'></img>
                                                    </Col>
                                                    <Col>
                                                        <p>{tempOne}°</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className='text-center'>
                                        <Col className='d-flex justify-content-end'>
                                            <div className='col-12 fiveDays'>
                                                <p className='date'>{dateTwo}</p>
                                                <hr className='hr' />
                                                <Row>
                                                    <Col>
                                                        <img src={weatherTwoImg} className='img'></img>
                                                    </Col>
                                                    <Col>
                                                        <p>{tempTwo}°</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className='text-center'>
                                        <Col className='d-flex justify-content-end'>
                                            <div className='col-12 fiveDays'>
                                                <p className='date'>{dateThree}</p>
                                                <hr className='hr' />
                                                <Row>
                                                    <Col>
                                                        <img src={weatherThreeImg} className='img'></img>
                                                    </Col>
                                                    <Col>
                                                        <p>{tempThree}°</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className='text-center'>
                                        <Col className='d-flex justify-content-end'>
                                            <div className='col-12 fiveDays'>
                                                <p className='date'>{dateFour}</p>
                                                <hr className='hr' />
                                                <Row>
                                                    <Col>
                                                        <img src={weatherFourImg} className='img'></img>
                                                    </Col>
                                                    <Col>
                                                        <p>{tempFour}°</p>
                                                    </Col>
                                                </Row>

                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className='text-center'>
                                        <Col className='d-flex justify-content-end'>
                                            <div className='col-12 fiveDays'>
                                                <p className='date'>{dateFive}</p>
                                                <hr className='hr' />
                                                <Row>
                                                    <Col>
                                                        <img src={weatherFiveImg} className='img'></img>
                                                    </Col>
                                                    <Col>
                                                        <p>{tempFive}°</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </>
                        )
                }

            </Container>
        </div>
    )
}

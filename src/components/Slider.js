import React, { Component } from 'react';
import s1 from "../img/s1.png";
import s2 from "../img/s2.png";
import s3 from "../img/s3.png";
import s4 from "../img/s4.png";

class Slider extends React.Component{
	constructor(props) {
		//super метод который позволяет вызвать родительский конструктор
		super(props);
		this.state = {
			// слайды
			slides: [
				{
					eachSlide: `url(${s1})`
				},
				{
					eachSlide: `url(${s2})`
				},
				{
					eachSlide: `url(${s3})`
				},
				{
					eachSlide: `url(${s4})`
				}
			],
			autoplay: false,
			active: 0,
			max: 0
		}
			// в переменной max длинна масиива то есть колличество слайдов
		this.state.max = this.state.slides.length;
		this.intervalBetwenSlides = this.intervalBetwenSlides.bind(this);
		this.toggleAutoplay = this.toggleAutoplay.bind(this);
		this.nextOne = this.nextOne.bind(this);
		this.prevOne = this.prevOne.bind(this);
	}
	componentDidMount() {
		this.interval = setInterval(() => this.intervalBetwenSlides(), 3000)
	}
	// метод выполнится когда элемент исчезнет со страницы
	componentWillUnmount() {
		clearInterval(this.interval)
	}
	intervalBetwenSlides() {
		if(this.state.autoplay === true) {
			if(this.state.active === this.state.max - 1) {
				this.state.active = 0
			} else {
				this.state.active++
			} 
			// this это контекст вызова
			this.setState({
				active: this.state.active
			}) 

		}
		
	} 
	// при вызове этой функции будет переключаться автоплай
	toggleAutoplay() {
		this.setState({
			autoplay: !this.state.autoplay
		})
		}
		nextOne() {
			(this.state.active < this.state.max - 1) ?
			this.setState({
				active:  this.state.active + 1
			}) : this.setState({
				active: 0
			})
		}
		prevOne() {
			(this.state.active > 0) ?
			this.setState({
				active: this.state.active--
			}) : this.setState({
				active: this.state.max - 1
			})
		}
		// метод который меняет наш active 
		dots(index, evennt) {
			// при вызове setState часть компонента рендерится заново
			this.setState({
				active: index
			})
		}
		isActive(value) {
			if(this.state.active === value){
				return 'acltive'
			}
		}
		// возвращает стили слайдера
		setSliderStyles(){
			// эта переменная показвает на сколько необходимо сместить наш слайдер по горизонтали
			const transition = this.state.active * - 100/this.state.slides.length
			return {
				width: (this.state.slides.length * 100) + '%',
				// интерполяция 
				transform: `translateX(${transition}%)`
			}

		}
		// этот метод берет массив slides с определёнными картинками
		// и создаёт из него новый массив
		renderSlides() {
			// ширина нашего слайда
			const transition = 100/this.state.slides.length +"%"

			return this.state.slides.map((item, index) => (
					// className для каждой картинки в слайдере
					<div className = "each-slide"
						key={index}
						style={{backgroundImage: item.eachSlide, width: transition}}>
						</div>
				))
		}
		renderDots(){
			return this.state.slides.map((item, index) =>(
					<li 
						className = {this.isActive(index) + ' dots'}
						key = {index}
						ref="dots"
						//обработчик события*/}
						//привязываем метод к определенному элементу возвращаемому map*/}
						onClick={this.dots.bind(this, index)}>
							{/*сама точка*/}
							<a>&#9679;</a>
						</li>
				))
		}
		// метод возвращающий svg графику 
		renderPlayStop(){
			// в эту переменную записываем svg графику 
			let playStop;

			if(this.state.autoplay){
				playStop = <svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24'>
							    <path d='M0 0h24v24H0z' fill='none'/>
							    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z'/>
							</svg>;
			} else {
				playStop = <svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24'>
							    <path d='M0 0h24v24H0z' fill='none'/>
							    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z'/>
							</svg>;
			}
			return playStop
		}
		renderArrows(){
			return(
				// в реакте всегда нужен блок который покрывает все что мым возвращаем
				<div>
					<button
						type="button"
						className="arrows prev"
						onClick = {this.prevOne}>
						<svg fill='#FFFFFF' width='50' height='50' viewBox='0 0 24 24'>
						    <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'/>
						    <path d='M0 0h24v24H0z' fill='none'/>
						</svg>
					</button>	

					<button
						type="button"
						className="arrows next"
						onClick = {this.nextOne}>
						<svg fill='#FFFFFF' height='50' viewBox='0 0 24 24' width='50'>
						    <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/>
						    <path d='M0 0h24v24H0z' fill='none'/>
						</svg>
					</button>	

				</div>
				)
		}
		render(){
			return(
					<div className="slider">
						<div 
						className="wrapper"
						style={this.setSliderStyles()}>
						{this.renderSlides()}
						</div>

						{this.renderArrows()}
						<ul className="dots-container">
							{this.renderDots()}
						</ul>
						<a className="toggle-play"
							onClick={this.toggleAutoplay}>
								{this.renderPlayStop()}
						</a>
					</div>
				)
		}

}
export default Slider
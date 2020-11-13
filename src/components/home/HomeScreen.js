import React from 'react'
import CarouselItem from '../carousel/CarouselItem';
import Carousel from '../carousel/Carousel'
import Categories from '../categories/Categories';
import useInitialState from '../../hooks/useInitialState';
import './HomeScreen.scss'
import home_1 from '../../assets/static/home_1.png'


export const HomeScreen = () => {

	const initialState = useInitialState();
	return (
		<div className="">
			<section className="section section-1">
				<div className="center" >
						<h1>Home</h1>
						<img src={home_1} className="img-responsive" alt=""/>
				</div>
			</section>
			<section className="section section-2">
				<hr />
				<h4>Emisora</h4>
				<audio src="https://ssl.aloncast.com:1564/" controls={true}></audio>
			</section>
			<section>
				<div className="full-height">
					<Categories title="Eventos Gratuitos">
						<Carousel>
							{
								initialState && initialState.map(item =>
									<CarouselItem key={item.id}  {...item} />
								)
							}
						</Carousel>
					</Categories>

				</div>
			</section>
			<section>
				<div className="full-height">
			
					<Categories title="Eventos De Pago">
						<Carousel>
							{
								initialState && initialState.map(item =>
									<CarouselItem key={item.id}  {...item} />
								)
							}
						</Carousel>
					</Categories>
				</div>
			</section>
			</div>
		
	)
}

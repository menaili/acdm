import Swiperslide from "../single/swiper"

const Trendingcourses: React.FC = () => {
    return(
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl capitalize ">Trending courses</h1>
            <Swiperslide />
        </div>
    )
}

export default Trendingcourses;
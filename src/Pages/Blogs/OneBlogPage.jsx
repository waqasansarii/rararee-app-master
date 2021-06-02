import React,{useEffect,useState,useLayoutEffect} from 'react'
import SocialFeed from '../../Components/BlogComp/SocialFeed'
import { useParams } from 'react-router-dom'
import { blog_card_data } from './cardData'
// assets 
import blogSliderImg from '../../Assets/Group 3711.png'
import sIcon1 from '../../Assets/Icon awesome-facebook-square.png'
import sIcon2 from '../../Assets/Icon awesome-instagram-1.png'
import sIcon3 from '../../Assets/Icon awesome-twitter-square.png'
import sIcon4 from '../../Assets/Icon awesome-linkedin.png'
import sIcon5 from '../../Assets/Icon awesome-behance-square.png'


const SelectBlog = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      },[]);

    const { id } = useParams()
    let [blogData,setBlogData] = useState([])
    useEffect(()=>{
        const filter = blog_card_data.filter((val) => id === val.id)
        setBlogData(filter)
    },[id])

    return (
        <div>
            <div className='blog_container'>
                <div className="blog_main_div">
                    <div className="blog_head_search_div">
                        <h3><strong style={{ color: '#1cc1a0' }}> Rarare Blog!</strong></h3>
                    </div>
                    <div className='get_blog_one_link'>
                        Blogs {' > '} <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</span>
                    </div>
                    <img className='id_blog_img' src={blogSliderImg} alt="img" />
                    <div className="select_blog_para_data">
                        <h5><strong>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</strong></h5>
                        <div className="blog_data_div">
                            <p>june 20-3-2020 | 3:00 Pm</p>
                        </div>
                    </div>
                    <div className='blog_card_socail_feed_div'>
                        {blogData.map((val, i) => (
                            <div className='select_blog_more_main_div' key={i}>
                                <div className="select_blog_user_info" >
                                    <div className='blog_user_card_detail_div'>
                                        <img src={val.bloger_img} alt="img" />
                                        <div>
                                            <p className='bloger_name'>{val.name}</p>
                                            <p className='bloger_email'>{val.email}</p>
                                        </div>
                                    </div>
                                    <ul className='blog_social_icons_ul'>
                                        <li>
                                            <img src={sIcon1} alt="img" />
                                        </li>
                                        <li>
                                            <img src={sIcon2} alt="img" />
                                        </li>
                                        <li>
                                            <img src={sIcon3} alt="img" />
                                        </li>
                                        <li>
                                            <img src={sIcon4} alt="img" />
                                        </li>
                                        <li>
                                            <img src={sIcon5} alt="img" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="select_blog_more_para">
                                    <p >
                                        {val.para1 ? val.para1 : null}
                                    </p>
                                    <p >
                                        {val.para2 ? val.para2 : null}
                                    </p>
                                    <p >
                                        {val.para3 ? val.para3 : null}
                                    </p>
                                </div>
                            </div>
                        ))}
                        < SocialFeed />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SelectBlog

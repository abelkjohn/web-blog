import imgOne from './images/blog-image-01.jpg'
import imgTwo from './images/blog-image-02.png'
import imgThree from './images/blog-image-03.jpg'
import imgFour from './images/blog-image-04.jpg'
import imgFive from './images/blog-image-05.jpg'
import artThree from "./images/article-image-03.jpg"
import image from './images/img.jpg'


export default function Home() {
  return (
    <div>
      <header>
            <div>
                <img src={image.src}/>
                <h3>My learning journal</h3>
            </div>
            <div>
                <p>Home</p>
                <p>About Me</p>
            </div>
        </header>
        <section className='main'>
            <p className='date'>JULY 23, 2022</p>
            <h1 className='title'>My new journey as a bootcamp student.</h1>
            <p className='paragraph'>After several months of learning in the Frontend Developer Career Path, I&apos;ve made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
        </section>
        <section className='blog'>
            <div className='blog-post'>
                <img className='blog-img' src={artThree.src} />
                <p className='blog-date'>JULY 23, 2022</p>
                <h2 className='blog-title'>Blog one</h2>
                <p className='blog-para'>I&apos;m excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
            </div>
            <div className='blog-post'>
                <img className='blog-img' src={imgFour.src} />
                <p className='blog-date'>JULY 23, 2022</p>
                <h2 className='blog-title'>Blog two</h2>
                <p className='blog-para'>I&apos;m excited to start a new learning journey as a Scrimba Bootcamp chad! After several months of learning in the Frontend Developer Career Path.</p>
            </div>
            <div className='blog-post'>
                <img className='blog-img' src={imgFive.src} />
                <p className='blog-date'>JULY 23, 2022</p>
                <h2 className='blog-title'>Blog three</h2>
                <p className='blog-para'>I&apos;m excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
            </div>
            <div className='blog-post'>
                <img className='blog-img' src={imgThree.src} />
                <p className='blog-date'>JULY 23, 2022</p>
                <h2 className='blog-title'>Blog four</h2>
                <p className='blog-para'>I&apos;m excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
            </div>
            <div className='blog-post'>
                <img className='blog-img' src={imgOne.src} />
                <p className='blog-date'>JULY 23, 2022</p>
                <h2 className='blog-title'>Blog five</h2>
                <p className='blog-para'>I&apos;m excited to start a new learning journey as a Scrimba Bootcamp chad! After several months of learning in the Frontend Developer Career Path.</p>
            </div>
            <div className='blog-post'>
                <img className='blog-img' src={imgTwo.src}/>
                <p className='blog-date'>JULY 23, 2022</p>
                <h2 className='blog-title'>Blog six</h2>
                <p className='blog-para'>I&apos;m excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
            </div>
        </section>
    </div>
  )
}

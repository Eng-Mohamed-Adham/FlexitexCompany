import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from '../blog-post.1.md';
import post2 from '../blog-post.2.md';
import post3 from '../blog-post.3.md';
import mainFeaturedPoastImg from './imgs/cro4.jpg'
import FeaturedPostImg1 from './imgs/cro2.jpg'
import FeaturedPostImg2 from './imgs/cro4.avif'
const sections = [
  { title: 'About Us', url: '#about' },
  { title: 'Services', url: '#services' },
  { title: 'Quality', url: '#quality' },
  { title: 'Our Team', url: '#teams' },
  { title: 'Our Vision', url: '#our-vision' },
  { title: 'Innovation', url: '#innovation' },
  {title:'Contact Us', url:'#contact'}
  
];

const mainFeaturedPost = {
  title: 'About us',
  description:
    "At Golden Tech Associates, we are passionate about harnessing the power of technology to create sustainable solutions that stand the test of time. We believe that electronics should not only serve their intended purpose but should also be designed with longevity and ease of maintenance in mind.",
  image:`${mainFeaturedPoastImg}`,
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Maintenance of electronic devices',
    date: 'Nov 12 1997',
    description:
      'At Golden Tech Associates, we understand that electronic devices are an integral part of modern life, and their reliability is crucial. That is why we offer comprehensive maintenance services to ensure that your electronic devices continue to perform at their best.',
    image: `${FeaturedPostImg1}`,
    imageLabel: 'Image Text',
  },
  {
    title: 'Our Products',
    date: 'Sep 22 2007',
    description:
      'At Golden Tech Associates, we take pride in offering a diverse range of cutting-edge electronic products designed to enhance your life and business operations.Our products are built with precision, quality, and innovation in mind, ensuring they meet the highest industry standards.',
    image: `${FeaturedPostImg2}`,
    imageLabel: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'Quality',
  description:
    'We prioritize quality above all else. Our products are built to last, using the highest quality components and materials. We stand behind our work, offering robust warranties and reliable support.',
  archives: [
    { title: 'Office equipment maintenance team', url: '#' },
    { title: 'Tablet maintenance team', url: '#' },
    { title: 'Mobile device maintenance team', url: '#' },
    { title: 'Smart devices maintenance team', url: '#' },
    { title: 'Creativity and development team', url: '#' },
    { title: 'A team of gaming hardware specialists', url: '#' },
    { title: 'Programming and development team', url: '#' },
    { title: 'Apple phone specialists team', url: '#' },
   
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function HomePage() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Golden Tech Associates" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4} id="services">
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="Golden Tech Associates" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Golden Tech Associates"
        description="Golden Tech Associates is the Best Choice &#x1F499;
        "
      />
    </ThemeProvider>
  );
}

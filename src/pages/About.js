import TwineGame from '../components/TwineGame';


function About() {
  return (
    <div className = 'row'>
    <h1>Rekaleto Stories</h1>
    <nav class="nav nav-pills nav-justified m-2">
      <a class="nav-link active" aria-current="page" href="#">About</a>
      <a class="nav-link" href="#">2019</a>
      <a class="nav-link" href="#">2020</a>
      <a class="nav-link" href="#">2021</a>
    </nav>

    <div className='row border border-4 shadow-lg p-3 mb-5 bg-body rounded vh-100 m-2'>
      <TwineGame storyURL='games/2021/bakery revolution/Bakery Revolution.html' title='Bakery Revolution' />
    </div>
    </div>
  );
}

export default About;

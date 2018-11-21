
function getExp() {
  let _exp = [
    {
      id: 1,
      duration: '11/2018-Present',
      organization: 'Wipro Ltd.',
      address: '',
      role: 'Frontend Developer',
      content: 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information'
    },    
    {
      id: 2,
      duration: '10/2015-10/2018',
      organization: 'Accenture Solutions Pvt. Ltd.',
      address: '',
      role: 'Fullstack Developer',
      content: 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information'
    },
    {
      id: 3,
      duration: '07/2012-10/2015',
      organization: 'Axiom Consulting Pvt Ltd',
      address: '',
      role: 'Software Engineer',
      content: 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information'
    },
    {
      id: 4,
      duration: '07/2011-07/2012',
      organization: 'DELOPT Pvt Ltd',
      address: '',
      role: 'Trainee Engineer',
      content: 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information'
    },
    {
      id: 5,
      duration: '01/2012-01/2014',
      organization: 'N/A',
      address: '',
      role: 'Volunteer Work',
      content: 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information'      
    }
  ];     
  return _exp
}

function getSummary() {
  return {
    name: 'Sriharsha',
    profile: 'https://www.gravatar.com/avatar/3e7acced78cac99cde7d0fa5802a47c2?s=328&d=identicon&r=PG&f=1',
    role: 'Computer Programmer (2011-present)',
    github: 'https://github.com/sriharsha91',
    stackoverflow: 'https://stackoverflow.com/users/5978922/sriharsha-bhat',
    summary: 'Technology/Language agnostic computer programmer with 7+ year of experience in building various kind of computer applications from embedded C application to enterprise level web application. My main expertise are fullstack web applications, resuable frontend component development, interactive data visualizations, debugging/issue fixing/feature enhancement to existing code base, hosting/managing/scaling web/mobile backend on cloud services, arduino/AVR/IoT programming, browser plugin development',
    tags: ['C', 'Javascript', 'Python', 'Ruby', 'Kotlin', 'Elisp', 'Elixir', 'Ruby On Rails', 'bottle', 'HTML', 'CSS', 'React', 'Angular', 'riot', 'd3', 'ES6', 'Web applications', 'Frontend', 'Backend', 'Devops', 'Embedded', 'Arduino', 'IoT', 'Cloud']    
  }
}

export { getExp, getSummary }

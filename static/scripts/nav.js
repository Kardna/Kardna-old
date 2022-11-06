function NavHome(){
  console.log("Does Nothing Lol")
}
function NavWeb(){
  document.getElementById('navbar').hidden = true
    const delay = (delayInms) => {
        return new Promise(resolve => setTimeout(resolve, delayInms));
      }
      console.log('searching=$webjsong')
      const sample = async () => {
        console.log('fetching...')
        let delayres = await delay(2500);
        console.log('loaded!')
        document.getElementById("loader").src="./innerweb/";
      };
      sample();
}
function NavGame(){
  document.getElementById('navbar').hidden = true
    const delay = (delayInms) => {
        return new Promise(resolve => setTimeout(resolve, delayInms));
      }
      console.log('searching=$webjsong')
      const sample = async () => {
        console.log('fetching...')
        let delayres = await delay(2500);
        console.log('loaded!')
        document.getElementById("loader").src="./games/";
      };
      sample();
}
function NavMusic(){
  document.getElementById('navbar').hidden = true
  const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  }
  console.log('searching=$webjsong')
  const sample = async () => {
    console.log('fetching...')
    let delayres = await delay(2500);
    console.log('loaded!')
    document.getElementById("loader").src="./music/";
  };
  sample();
}
function NavMovie(){
  document.getElementById('navbar').hidden = true
  const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  }
  console.log('searching=$webjsong')

  const sample = async () => {
    console.log('fetching...')
    let delayres = await delay(2500);
    console.log('loaded!')
    document.getElementById("loader").src="./movies/";
  };
  sample();
}
function NavFavs(){
    alert("Account Ststem Offline.");
}
function NavSettings(){
    alert("This Feature Is Not Avalible OR your verison of KARDNA is out of date :(");
}
function NavAccount(){
  document.getElementById('navbar').hidden = true
     const delay = (delayInms) => {
      return new Promise(resolve => setTimeout(resolve, delayInms));
    }
    console.log('searching=$webjsonlogin')
    const sample = async () => {
      console.log('fetching...')
      let delayres = await delay(2500);
      console.log('loaded!')
      document.getElementById("loader").src="./logins/";
    };
    sample();
}

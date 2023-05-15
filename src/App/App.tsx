import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';


function App () {

	return (
		<div className="min-h-screen bg-slate-100 flex flex-col">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;

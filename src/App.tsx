import './App.css';
import SelectBox from './components/SelectBox';
import useInternationalization from './lib/useInternationalization';
import RecipeReviewCard from './RecipeReviewCard';

function App() {
 const resources= useInternationalization("promo tool");
  return (
    <div className="App">
      {Object.keys(resources).length ?
      <div className='flex-col'>
        <div className='flex flex-end'>
          <SelectBox />
        </div>
        <div className='flex-col'>
          <div className='flex'>
          <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        </div>
        <div className='flex'>
          <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        </div>
        </div>
        
        </div>
       :null}
    </div>
  );
}

export default App;

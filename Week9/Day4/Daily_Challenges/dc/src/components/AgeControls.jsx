
import { useDispatch } from 'react-redux';
import { ageUpAsync, ageDownAsync } from '../slices/ageSlice'; 

const AgeControls = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(ageUpAsync(1))}>Age Up</button>
      <button onClick={() => dispatch(ageDownAsync(1))}>Age Down</button>
    </div>
  );
};

export default AgeControls;
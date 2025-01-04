import { fetchUserStart, fetchUserSuccess, fetchUserFailure } from '../slices/userSlice';

export const fetchUserData = () => async (dispatch) => {
  dispatch(fetchUserStart());
  
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to fetch user data');
    }
    
    dispatch(fetchUserSuccess(data));
  } catch (error) {
    dispatch(fetchUserFailure(error.message));
  }
};
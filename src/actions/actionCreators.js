import {
  CHANGE_SERVICE_FIELD,
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICE_REQUEST,
  FETCH_SERVICE_SUCCESS,
  FETCH_SERVICE_FAILURE,
  UPDATE_SERVICE_REQUEST,
  UPDATE_SERVICE_SUCCESS,
  UPDATE_SERVICE_FAILURE,
  REMOVE_SERVICE,
} from './actionTypes';

export const fetchServicesRequest = () => ({
  type: FETCH_SERVICES_REQUEST,
});

export const fetchServicesFailure = error => ({
  type: FETCH_SERVICES_FAILURE,
  payload: {
    error,
  },
});

export const fetchServiceFailure = error => ({
  type: FETCH_SERVICE_FAILURE,
  payload: {
    error,
  },
});

export const fetchServicesSuccess = items => ({
  type: FETCH_SERVICES_SUCCESS,
  payload: {
    items,
  },
});

export const fetchServiceSuccess = item => ({
  type: FETCH_SERVICE_SUCCESS,
  payload: {
    item,
  },
});

// export const saveServiceRequest = (name, price) => ({
//   type: ADD_SERVICE_REQUEST,
//   payload: {
//     name,
//     price,
//   },
// })

// export const saveServiceFailure = error => ({
//   type: ADD_SERVICE_FAILURE,
//   payload: {
//     error,
//   },
// });

// export const saveServiceSuccess = () => ({
//   type: ADD_SERVICE_SUCCESS,
// });

export const changeServiceField = (name, value) => ({
  type: CHANGE_SERVICE_FIELD,
  payload: {
    name,
    value,
  },
});

export const removeServiceRequest = id => ({
  type: REMOVE_SERVICE,
  payload: {
    id,
  },
});

export const fetchServiceRequest = id => ({
  type: FETCH_SERVICE_REQUEST,
});

export const removeService = async (dispatch, id) => {
  dispatch(fetchServicesRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(saveServiceSuccess());
  } catch (e) {
    dispatch(saveServiceFailure(e.message));
  }
  fetchServices(dispatch);
}

export const fetchServices = async dispatch => {
  dispatch(fetchServicesRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}`)
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
    dispatch(fetchServicesSuccess(data));
  } catch (e) {
    dispatch(fetchServicesFailure(e.message));
  }
}

export const fetchService = async (dispatch, id) => {
  dispatch(fetchServiceRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`)
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log("fetchService response data", data);
    // const item = data.find(el => el.id === id);

    dispatch(fetchServiceSuccess(data));
  } catch (e) {
    dispatch(fetchServiceFailure(e.message));
  }
}

export const saveServiceRequest = (name, price, content) => ({
  type: UPDATE_SERVICE_REQUEST,
  payload: {
    name,
    price,
    content
  },
})

export const saveServiceFailure = error => ({
  type: UPDATE_SERVICE_FAILURE,
  payload: {
    error,
  },
});

export const saveServiceSuccess = () => ({
  type: UPDATE_SERVICE_SUCCESS,
});

export const saveService = async (dispatch, id, name, price, content) => {
  dispatch(saveServiceRequest());
  try {
    console.log("1");
    const response = await fetch(process.env.REACT_APP_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // body: JSON.stringify({ id, name, price, content }),
      body: JSON.stringify({ "id": id, 
                              "name": name, 
                              "price": price, 
                              "content": content }),
    })    
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(saveServiceSuccess());
    //fetchServices(dispatch);
  } catch (e) {
    dispatch(saveServiceFailure(e.message));
  }
}

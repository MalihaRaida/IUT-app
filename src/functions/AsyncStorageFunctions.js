import {AsyncStorage} from 'react-native';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    alert("Data Stored Successfully!");
  } catch (error) {
    alert(error);
  }
};

const storeDataJSON = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    alert("Data Stored Successfully!");
  } catch (error) {
    alert(error);
  }
};

const getAllKeys = async()=>{
  let keys = []
  try {
    keys =await AsyncStorage.getAllKeys();
    return keys;
  } catch(e) {
     console.log(e)
  }
  
}

const getAllPost= async()=>{
  let keys = await getAllKeys();
  let posts=[];
  keys.forEach(async (key)=>{
            if (key.startsWith('post')) {
                posts.push(await getDataJSON(key));
                return posts;
            }
        }
    );
}

const getData = async (key) => {
  try {
    let data = await AsyncStorage.getItem(key);
    if (data != null) {
      return data;
    } else {
      alert("No data with this key!");
    }
  } catch (error) {
    alert(error);
  }
};

const getDataJSON = async (key) => {
  try {
    let data = await AsyncStorage.getItem(key);
    if (data != null) {
      const jsonData = JSON.parse(data);
      return jsonData;
    } else {
      alert("No data with this key!");
    }
  } catch (error) {
    alert(error);
  }
};

const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    alert("Data Removed Successfully");
  } catch (error) {
    alert(error);
  }
};

export { getAllKeys,getAllPost,storeData, storeDataJSON, getData, getDataJSON, removeData };
import axios from "axios";

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos/1",
  headers: {
    Authorization:
      "Bearer Jw0oIMgpId1HV8x-mogAapr36SVRDSAM00qOEvAmLyxCaOV1I0T6kzJbSvazjA6Q7sNS46uHfHzRzLLAESkHYv3ES50h-sUQwtwvh836OsN-D5UwO6ObMswyxDM6YXYx",
  },
});

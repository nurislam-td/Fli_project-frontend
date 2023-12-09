import ky from "ky";

const api = ky.create({ prefixUrl: "http://localhost:8000/api/v1/aircrafts" });

async function getAircrafts() {
  try {
    const result = await api.get("/").json();
    return result;
  } catch (errors) {
    console.log(errors);
  }
}

async function getAircraft(id) {
  try {
    const result = await api.get(`/${id}`).json();
    return result;
  } catch (errors) {
    console.log(errors);
  }
}

async function addAircraft(aircraft) {
  try {
    const result = await api.post("/", { json: aircraft }).json();
    console.log("api added:", result);
    return result;
  } catch (errors) {
    console.log(errors);
  }
}

async function patchAircraft(id, aircraft) {
  try {
    const result = await api.patch(`/${id}`, { json: aircraft }).json();
    console.log("api updated:", result);
    return result;
  } catch (errors) {
    console.log(errors);
  }
}
async function deleteAircraft(id) {
  try {
    await api.delete(`/${id}`);
    console.log("aircraft deleted :", id);
  } catch (errors) {
    console.log(errors);
  }
}

export {
  getAircrafts,
  addAircraft,
  patchAircraft,
  getAircraft,
  deleteAircraft,
};

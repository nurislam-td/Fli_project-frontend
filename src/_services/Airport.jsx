import ky from "ky";

const api = ky.create({ prefixUrl: "http://localhost:8000/api/v1/" });

async function getAirports() {
  try {
    const result = await api.get("airports/").json();
    return result;
  } catch (errors) {
    console.log(errors);
  }
}

async function getAirport(id) {
  try {
    const result = await api.get(`airports/${id}`).json();
    return result;
  } catch (errors) {
    console.log(errors);
  }
}

async function addAirport(airport) {
  try {
    const result = await api.post("airports/", { json: airport }).json();
    console.log("api added:", result);
    return result;
  } catch (errors) {
    console.log(errors);
  }
}

async function patchAirport(id, airport) {
  try {
    const result = await api.patch(`airports/${id}`, { json: airport }).json();
    console.log("api updated:", result);
    return result;
  } catch (errors) {
    console.log(errors);
  }
}
async function deleteAirport(id) {
  try {
    await api.delete(`airports/${id}`);
    console.log("airport deleted :", id);
  } catch (errors) {
    console.log(errors);
  }
}

export { getAirports, addAirport, patchAirport, getAirport, deleteAirport };

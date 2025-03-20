const base = 'http://localhost:8000/api';

async function all() {
  try {
    const path = `${base}/svg/`;
    const res = await fetch(path);
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

type SvgData = {
  name: string;
  markup: string;
};
async function save(data: SvgData) {
  try {
    const path = `${base}/svg/`;
    const payload = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await fetch(path, payload);
    const resData = await res.json();

    return resData;
  } catch (err) {
    console.log(err);
  }
}
async function update(id: number, data: SvgData) {
  try {
    const path = `${base}/svg/${id}`;
    const payload = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await fetch(path, payload);
    const resData = await res.json();

    return resData;
  } catch (err) {
    console.log(err);
  }
}

export default {
  svg: { all, save, update },
};

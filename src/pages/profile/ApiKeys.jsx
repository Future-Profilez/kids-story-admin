import React, { useEffect, useState } from 'react'
import Story from '../../Apis/Story';
import { toast } from 'react-hot-toast';

export default function ApiKeys() {
    const type=['api-key', 'open-key']

    const [data, setData] = useState({
        open_api_key: "",
        image_api_key: "",
    });

    console.log("data",data)
    const handleInputs = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setData((prevState) => ({ ...prevState, [name]: value }));
        console.table("hfdh",data)
    };

    const [loading, setLoading] = useState(false);

    function updateKeys(key, type) {
        if (loading) { return false;}
        setLoading(true);
        const main = new Story();
        const fdata = new FormData();
        fdata.append("key", key);
        fdata.append("type", type);
        const response = main.update_ai_keys(fdata)
        response.then((res) => {
            if (res.data.status) {
                toast.success(res.data.message);
            } else {
                toast.error(res.data.message);
            }
            setLoading(false)
        }).catch((error) => {
            console.log("error", error);
            setLoading(false)
            toast.error("Failed to update API KEYS.");
        });
    }


    const [Openkey, setOpenkey] = useState([]);
    useEffect(() => {
        const main = new Story();
        const response = main.fetchKey();
        response.then((res) => {
            console.log("res",res)
            if (res.data.status === true) {
              setOpenkey(res.data.data);
              setData({
                open_api_key: res.data.openKey.key,
                image_api_key: res.data.apiKey.key,
            });
                }
        }).catch((error) => {
            console.log("error", error);
        });
    }, [Openkey]);

    console.log("Openkey",Openkey)
    
  return (
    <>
      <div className="update-field">
            <div className="row">
                <div className="col-md-12">
                    <label className="input_label" htmlFor="open-api"> Open Api Key </label>
                    <div className="password-label">
                        <input
                            placeholder="Open Api Key"
                            name="open_api_key"
                            onChange={handleInputs}
                            value={data.open_api_key}
                            type="text"
                            className="input_field password"
                            id="open-api"
                        />
                    </div>
                        <button className="btn btn-sm blue-gradient-btn ms-0 mt-3" onClick={()=>updateKeys(data.open_api_key, 'open-key')} >Update OpenApi Key</button>
                </div>

                <div className="col-md-12 mt-4">
                    <label className="input_label" htmlFor="vyro"> Vyro Api Key </label>
                    <div className="password-label">
                        <input
                            placeholder="Vyro Api Key"
                            name="image_api_key"
                            onChange={handleInputs}
                            // value={Openkey.key}
                         value={data.image_api_key}
                            type="text"
                            className="input_field password"
                            id="vyro"
                        />
                    </div>
                        <button className="btn btn-sm blue-gradient-btn ms-0 mt-3" onClick={()=>updateKeys(data.image_api_key, 'api-key')}>VyroAI Key</button>
                </div>
            </div>
            
            </div>
    </>
  )
}

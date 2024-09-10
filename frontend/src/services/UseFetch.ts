interface IBaseProps {
    endpoint: string;
    method: "POST" | "DELETE" | "PUT" | "GET" ;
    token?: string;
    body?: string;
};
interface IReturn {
    ok: boolean,
    object: {},
};
export default async function UseFetch({endpoint, method, token, body}:IBaseProps){
    const response = await fetch(`${endpoint}`, {
      headers: { "Content-Type": "application/json", 'Authorization':token? `Bearer: ${token}`:"" },
      body: body ? JSON.stringify(body) : null,
      method: method,
      cache: "no-cache",
    });

    if (!response.ok) {
        const error = await response.json();
        console.log(error);

        const retorno:IReturn = {
            ok: false,
            object: error,
        };
        return retorno;
    }else{
        const data = await response.json();

        const retorno:IReturn = {
            ok: true,
            object: data,
        };
        return retorno;
    };
};
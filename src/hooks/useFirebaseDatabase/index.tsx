import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { useCallback } from "react";
import { List } from "../../types";

const useFirebaseDatabase = () => {
  const saveList = useCallback(
    (list: List) =>
      new Promise((resolve, reject) => {
        const db = getFirestore();
        setDoc(doc(db, "lists", "list"), { list }).then(resolve).catch(reject);
      }),
    []
  );

  const getList: () => Promise<List> = useCallback(
    () =>
      new Promise((resolve, reject) => {
        const db = getFirestore();
        getDoc(doc(db, "lists", "list"))
          .then((docSnap) => {
            const data = docSnap.data();
            if (data) {
              resolve(data.list as List);
            } else {
              resolve([]);
            }
          })
          .catch(reject);
      }),
    []
  );

  return {
    saveList,
    getList
  };
};

export default useFirebaseDatabase;

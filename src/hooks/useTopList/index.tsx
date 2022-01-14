import { addDoc, collection, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import React, { useState, useEffect, useCallback } from "react";
import { useDatabase, useFirebaseDatabase } from "..";
import { defaultList, List, Top } from "../../types";

const key = "list";

const useTopList = () => {
  const [list, setList] = useState<List>([]);
  const { saveList, getList } = useFirebaseDatabase();

  const init = () => {
    const db = getFirestore();
    getDocs(collection(db, "lists")).then((querySnapshot) => {
      const tops: Top[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data) {
          tops.push(data as Top);
        }
      });
      setList(tops);
    });
  };
  const getLists = useCallback(
    () =>
      getList().then((l) => {
        setList(l);
      }),
    [getList]
  );

  const pushTop = (top: Top) => {
    const db = getFirestore();
    return addDoc(collection(db, "lists"), top).then((data) => {
      // update top with id
      setDoc(doc(db, "lists", data.id), { ...top, id: data.id });
    });
  };
  const findTopByTitle = useCallback(
    (title: string) => list.find((l) => l.title === title),
    [list]
  );

  const findTopById = (id: string) => {
    const db = getFirestore();
    return getDoc(doc(db, "lists", id))
  }

  useEffect(() => {
    getLists();
  }, [getLists]);

  console.log("list::", list);

  return {
    list,
    pushTop,
    findTopByTitle,
    init,
    getLists,
    findTopById
  };
};

export default useTopList;
import styles from "../../styles/Admin.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import toast from "react-hot-toast";
import { firestore, auth, serverTimestamp } from "../../lib/firebase";
import AuthCheck from "../../components/AuthCheck";

export default function AdminPostEdit({}) {
  return (
    <AuthCheck>
      <PostManager />
    </AuthCheck>
  );
}

function PostManager() {
  const [preview, setPreview] = useState(false);

  const router = useRouter();
  const { slug } = router.query;

  const postRef = firestore
    .collection("users")
    .doc(auth.currentUser.uid)
    .collection("posts")
    .doc(slug.toString());

  const [post] = useDocumentDataOnce(postRef);

  return <div></div>;
}

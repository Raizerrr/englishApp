import { useUserContext } from "../../context/UserContext";

export const SaveButton = ({ oldPassword }) => {
    const {updateUser} = useUserContext();

    const handleClickSave = async(e) => {
        e.preventDefault();
        await updateUser(oldPassword);
    }


    return (
        <button type="button" onClick={handleClickSave} class="btn btn-primary">Save</button>
    )
}
import {ADD_NEW_CARD, ADD_NEW_FOLDER, CHANGE_CURRENT_FOLDER} from "./types";


let initFolder = {
  current: {
      id: 'folder_name',
      name: 'Folder Name'
  },
  folders: [
      {
          id: 'folder_name',
          name: 'Folder Name'
      },
      {
          id: 'folder_2',
          name: 'Folder 2'
      },
      {
          id: 'folder_for_test',
          name: 'Folder for Test'
      },
      {
          id: 'folder_number_four',
          name: 'Folder number four'
      }
  ]
};

export function folderReducer(state = initFolder, action) {
    switch (action.type) {
        case CHANGE_CURRENT_FOLDER:
            let index = state.folders.findIndex(x => x.id == action.payload);
            return {
                ...state,
                current: state.folders[index]
            };
        case ADD_NEW_FOLDER:
            let newFld = {
                name: action.payload,
                id: action.payload.toLowerCase().replace(/ /g, "_")
            };
            return {
                ...state,
                folders: state.folders.concat(newFld)
            };

        default: return state
    }
}
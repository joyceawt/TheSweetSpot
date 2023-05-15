import React from 'react';

function DeleteConfirm({actionOnClick, id}) {
    
    return (
       <>
            <div class="alert alert-danger" role="alert">
            This action cannot be undone.
            </div>

            <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => actionOnClick(id)}>
                    Delete</button>
            </div>
       </>
    );
}

export default DeleteConfirm;
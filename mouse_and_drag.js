function mouseover(e)
{
    if(e.target.classList.contains("delete_semester"))
    {
        e.target.style.backgroundImage = "url('./assets/closedb.png')";
    }
    else if(e.target.classList.contains("semester_drag"))
    {
        e.target.style.backgroundImage = "url('./assets/dragb.png')";
        e.target.parentNode.parentNode.parentNode.parentNode.setAttribute('draggable','true');
    }
    else if(e.target.classList.contains("semester_date_edit"))
    {
        e.target.style.backgroundImage = "url('./assets/editb.png')";
    }
    else if(e.target.classList.contains("tick"))
    {
        e.target.style.backgroundImage = "url('./assets/tickb.png')";
    }
    else if(e.target.classList.contains("addCourse"))
    {
        e.target.style.textDecoration = "underline"
    }
    else if(e.target.classList.contains("grade"))
    {
        e.target.style.textDecoration = "underline"
    }
    else if(e.target.classList.contains("delete_add_course") || e.target.classList.contains("delete_course"))
    {
        e.target.style.backgroundImage = "url('./assets/open.png')";
    }
    else if(e.target.classList.contains("enter"))
    {
        e.target.classList.add('shake');
    }
}

function mouseout(e)
{
    if(e.target.classList.contains("delete_semester"))
    {
        e.target.style.backgroundImage = "url('./assets/closedw.png')";
    }
    else if(e.target.classList.contains("semester_drag"))
    {
        e.target.style.backgroundImage = "url('./assets/dragw.png')";
        e.target.parentNode.parentNode.parentNode.parentNode.setAttribute('draggable','false');
    }
    else if(e.target.classList.contains("semester_date_edit"))
    {
        e.target.style.backgroundImage = "url('./assets/editw.png')";
    }
    else if(e.target.classList.contains("tick"))
    {
        e.target.style.backgroundImage = "url('./assets/tickw.png')";
    }
    else if(e.target.classList.contains("addCourse"))
    {
        e.target.style.textDecoration = "none"
    }
    else if(e.target.classList.contains("grade"))
    {
        e.target.style.textDecoration = "none"
    }
    else if(e.target.classList.contains("delete_add_course") || e.target.classList.contains("delete_course"))
    {
        e.target.style.backgroundImage = "url('./assets/closed.png')";
    }
    else if(e.target.classList.contains("enter"))
    {
        e.target.classList.remove('shake');
    }
}

function drop(e, curriculum, dragged_item)
{
    let container = getAncestor(e.target, "container_semester");
    if(container)
    {
        let target_id = extractNumericValue(container.id); 
        let dragged_id = extractNumericValue(dragged_item.id);

        if(target_id > dragged_id)
        {
            for(let id = dragged_id; id < target_id; id++)
            {
                let drag = document.querySelector(('#con' + id));
                let tar = document.querySelector(('#con' + (id+1)));
                let temp = tar.innerHTML;
                tar.innerHTML = drag.innerHTML;
                drag.innerHTML = temp;

                //id-1 bc semester index range starts from 0 but container id starts from 1:
                let s_temp = curriculum.semesters[id-1];
                curriculum.semesters[id-1]=curriculum.semesters[id];
                curriculum.semesters[id] = s_temp;
            }
        }
        else
        {
            for(let id = dragged_id; id > target_id; id--)
            {
                let drag = document.querySelector(('#con' + id));
                let tar = document.querySelector(('#con' + (id-1)));
                let temp = tar.innerHTML;
                tar.innerHTML = drag.innerHTML;
                drag.innerHTML = temp;

                let s_temp = curriculum.semesters[id-2];
                curriculum.semesters[id-2]=curriculum.semesters[id-1];
                curriculum.semesters[id-1] = s_temp;
            }
        }

    }
}
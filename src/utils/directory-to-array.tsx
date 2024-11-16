import fs from 'fs';
import path from 'path';

type Props = {
    directoryPath: string;
}

export const getFilesWithPath = (dir_path : string, portfolio_dir : string, project_dir : string) => {
    const files = fs.readdirSync(dir_path);

    return files.map((file) => path.join('/', portfolio_dir, project_dir, file).replace(/\\/g, '/')).filter(Boolean);
};

// Usage example
export const directoryToArray =  (directoryPath: string)=> {
    const parts = directoryPath.split('/');

    const public_dir   = parts[parts.length - 3];
    const portfolio_dir= parts[parts.length - 2];
    const project_dir  = parts[parts.length - 1];

    const dir_path      = path.join(process.cwd(), public_dir, portfolio_dir, project_dir);
    const files        = getFilesWithPath(dir_path, portfolio_dir, project_dir);

    console.log("This is File List");
    console.log(files);

    return files
};
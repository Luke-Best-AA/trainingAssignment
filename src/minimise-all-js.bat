@echo off
for /r %%f in (*.ts) do (
    echo Minifying %%f...
    terser "%%f" -c -m -o "%%f"
)
echo All .ts files (including subfolders) have been minimized and overwritten.
pause

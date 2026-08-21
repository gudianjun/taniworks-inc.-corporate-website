@echo off
for /f "delims=" %%i in ('wsl -d Ubuntu-26.04 wslpath -a "%cd%"') do set P=%%i
code --remote wsl+Ubuntu-26.04 "%P%"